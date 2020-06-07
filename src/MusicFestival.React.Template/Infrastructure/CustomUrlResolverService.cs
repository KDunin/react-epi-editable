using EPiServer.ContentApi.Core.Configuration;
using EPiServer.ContentApi.Core;
using EPiServer.Core;
using EPiServer.Editor;
using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using EPiServer.Web;
using System.Web;

public class CustomUrlResolverService : UrlResolverService
{
    private readonly ServiceAccessor<HttpContextBase> _httpContextAccessor;
    public CustomUrlResolverService(UrlResolver urlResolver,
           ContentApiConfiguration contentApiConfiguration,
           ServiceAccessor<HttpContextBase> httpContextAccessor) : base(urlResolver, contentApiConfiguration)
    {
        _httpContextAccessor = httpContextAccessor;
    }
    public override string ResolveUrl(ContentReference contentLink, string language)
    {
        return _urlResolver.GetUrl(contentLink, language, new VirtualPathArguments
        {
            ContextMode = GetContextMode()
        });
    }
    private ContextMode GetContextMode()
    {
        var httpCtx = _httpContextAccessor();
        if (httpCtx == null || httpCtx.Request == null || httpCtx.Request.QueryString[PageEditing.EpiEditMode] == null)
        {
            return ContextMode.Default;
        }
        if (bool.TryParse(httpCtx.Request.QueryString[PageEditing.EpiEditMode], out bool editMode))
        {
            return editMode ? ContextMode.Edit : ContextMode.Preview;
        }
        return ContextMode.Undefined;
    }
}