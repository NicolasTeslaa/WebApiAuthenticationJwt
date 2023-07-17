namespace Login;

public partial class AppShell : Shell
{
	public AppShell()
	{
		InitializeComponent();
	}
	private async void logoff(object sender, EventArgs e)
	{
        await Navigation.PushAsync(new Page.Login());

    }
}
