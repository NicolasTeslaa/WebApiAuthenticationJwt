using Login.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Login.Services
{
    public class LoginService : ILoginService
    {
        /*public async Task<UserModel> Login(string email, string password){
            var user = new UserModel();
              var client = new HttpClient();

              string url = "http://localhost:7094/api/AuthManagement/Login";
              client.BaseAddress = new Uri(url);
              HttpResponseMessage response = await client.GetAsync(url);
              if(response.IsSuccessStatusCode)
              {
                  string content=response.Content.ReadAsStringAsync().Result;

              }
            





        }*/
        public async Task<UserModel> Login(string email, string password)
        {

            // Montar o objeto de dados para enviar no corpo da requisição
            var data = new { Email = email, Password = password };

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
                    var response = await client.PostAsync("http://localhost:7094/api/AuthManagement/Login", content);

                    // Verificar se a requisição foi bem-sucedida (código 200)
                    if (response.IsSuccessStatusCode)
                    {
                        var json = await response.Content.ReadAsStringAsync();
                        return JsonConvert.DeserializeObject<UserModel>(json);
                    }
                    else
                    {
                    }
                }
                catch (Exception ex)
                {
                    // Lidar com a exceção ocorrida durante a requisição

                }
            }
            return null;
        }
    }
}
