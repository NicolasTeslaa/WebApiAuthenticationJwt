using Login.Services;
using Microsoft.Extensions.Logging;

namespace Login;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
            });
        builder.Services.AddSingleton<ILoginService, LoginService>();
        builder.Services.AddTransient(provider => new HttpClient
        {
            BaseAddress = new Uri($@"https://{(DeviceInfo.DeviceType == DeviceType.Virtual
     ? "10.0.2.2" : "localhost")}:5001/"),
            Timeout = TimeSpan.FromSeconds(10)
        });

#if DEBUG
        builder.Logging.AddDebug();
#endif


#if ANDROID && DEBUG
        Platforms.Android.DangerousAndroidMessageHandlerEmitter.Register();
        Platforms.Android.DangerousTrustProvider.Register();
#endif

        return builder.Build();
    }
}
