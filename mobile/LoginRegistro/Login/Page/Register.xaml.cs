namespace Login.Page;

public partial class Register : ContentPage
{
    public Register()
    {
        InitializeComponent();
    }
    private void TogglePasswordVisibility(object sender, EventArgs e)
    {
        passwordEntry.IsPassword = !passwordEntry.IsPassword;
        confirmPasswordEntry.IsPassword = !confirmPasswordEntry.IsPassword;
    }

    private void ReturnLogin(object sender, EventArgs e)
    {
        Shell.Current.Navigation.PushAsync(new Page.Login());
    }
}