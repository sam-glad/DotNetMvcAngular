using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularAndMVC.Startup))]
namespace AngularAndMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
