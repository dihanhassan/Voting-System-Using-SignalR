using Microsoft.AspNetCore.SignalR;
using System.Collections;

namespace SignalR.Hubs
{
    public class VoteSystem : Hub
    {
        public Dictionary<string, int> GetUpdateVoteStatus()
        {
            return SD.VoteCountMapper;
        }
    }
}
