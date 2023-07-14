using System;
using System.Net.Http;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Login.Models;
using Login.Services;
using Microsoft.Maui.Controls;
using Newtonsoft.Json;

namespace Login.Page;

public partial class Login : ContentPage
{
    private readonly ILoginService _loginService;
    public Login()
    {
        InitializeComponent();
    }

    public Login(ILoginService loginService)
    {
        _loginService = loginService;
    }

    private void TogglePasswordVisibility(object sender, EventArgs e)
    {
        passwordEntry.IsPassword = !passwordEntry.IsPassword;
    }
    private void NavigateRegister(object sender, EventArgs e)
    {
        Shell.Current.Navigation.PushAsync(new Register());
    }
    private async void Validate(object sender, EventArgs e)
    {
        string email = emailEntry.Text;
        string password = passwordEntry.Text;
        if (email == null || password == null)
        {
            DisplayAlert("Atenção", "Preencha todos os campos", "OK", "Cancelar");
            return;
        }
        var data = new { email, password };

        // Serializar o objeto de dados em formato JSON
        string jsonData = JsonConvert.SerializeObject(data);

        // Criar o conteúdo da requisição
        var content = new StringContent(jsonData, Encoding.UTF8, "application/json");

        // Criar a instância do HttpClient
        using (var client = new HttpClient())
        {
            try
            {
                // Enviar a requisição POST para a API
                var response = await client.PostAsync("https://192.168.3.241:443/api/AuthManagement/Login ", content);

                // Verificar se a requisição foi bem-sucedida (código 200)
                if (response.IsSuccessStatusCode)
                {
                    var json = await response.Content.ReadAsStringAsync();
                    DisplayAlert("deu bom porra", "parabens caralho, requisição bateu no servidor", "OK", "Cancelar");
                    Shell.Current.Navigation.PushAsync(new Dashboard());
                    return;

                }
                else
                {
                    DisplayAlert("deu erro porra", "Erro", "OK", "Cancelar");

                }
            }
            catch (Exception ex)
            {
                // Lidar com a exceção ocorrida durante a requisição
                DisplayAlert("Erro na requisição", $"{ex}", "OK", "Cancelar");

            }
        }
    }
}



/* 
    var response = await _loginService.Login(email, password);

        if (response != null)
        {
            await AppShell.Current.DisplayAlert("Usuario validado", "OK", "OK");
        }
        else
        {
            await AppShell.Current.DisplayAlert("Usuario invalidado", "OK", "OK");
        }
*/



