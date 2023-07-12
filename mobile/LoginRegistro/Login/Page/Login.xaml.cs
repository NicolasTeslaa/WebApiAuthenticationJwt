namespace Login.Page;

public partial class Login : ContentPage
{
	public Login()
	{
		InitializeComponent();
	}
    private void TogglePasswordVisibility(object sender, EventArgs e)
    {
        passwordEntry.IsPassword = !passwordEntry.IsPassword;
    }
    private void NavigateRegister(object sender, EventArgs e)
    {
        Shell.Current.Navigation.PushAsync(new Page.Register());
    }
}