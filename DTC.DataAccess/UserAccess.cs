using Amazon.Runtime.Internal.Settings;
using DTC.Model;
using MongoDB.Driver;

namespace DTC.DataAccess {
    public class UserAccess : BaseAccess, IUserAccess
    {


        public async Task<User> GetUserByEmail(string email) {
            var collection = Connect<User>("User");

            return await collection.Find(x => x.Email == email).Limit(1).FirstOrDefaultAsync();
        }

        public async Task<User> GetUserById(Guid userId) {
            var collection = Connect<User>("User");

            return await collection.Find(x => x.Id == userId).Limit(1).FirstOrDefaultAsync();
        }

        public User? GetUserByUsername(string username) {
            var collection = Connect<User>("User");

            return collection.Find(x => x.Username.Equals(username)).Limit(1).FirstOrDefault();
        }

        public Task CreateUser(User user) {
            var collection = Connect<User>("User");

            return collection.InsertOneAsync(user);
        }
    }
}