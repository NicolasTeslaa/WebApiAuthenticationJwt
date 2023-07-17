using Newtonsoft.Json;
using System.Text;


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
    private async void Validate(object sender, EventArgs e)
    {
        string name = nameEntry.Text;
        string email = emailEntry.Text;
        string password = passwordEntry.Text;
        string confirmPassword = confirmPasswordEntry.Text;
        if (email == null || password == null || name == null)
        {
            DisplayAlert("Atenção", "Preencha todos os campos", "OK");
            return;
        }
        if (password != confirmPassword)
        {
            DisplayAlert("Erro", "Senhas não coincidem", "OK");
            return;
        }
        var data = new { name, email, password };
        string jsonData = JsonConvert.SerializeObject(data);
        var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
        using (var client = new HttpClient())
        {
            try
            {
                var response = await client.PostAsync("http://192.168.3.241:8099/api/AuthManagement/Register ", content);
                if (response.IsSuccessStatusCode)
                {
                    DisplayAlert("Aviso", "Conta criada com sucesso", "OK");
                    await Navigation.PushAsync(new Login());


                    return;
                }
                else
                {
                    string responseBody = await response.Content.ReadAsStringAsync();

                    DisplayAlert("Erro de registro", $"{responseBody}", "OK");
                }
            }
            catch (Exception ex)
            {
                DisplayAlert("Erro", $"{ex}", "OK");
            }
        }


    }
}