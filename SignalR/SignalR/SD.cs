namespace SignalR
{
    public static class SD
    {
        public const string Tom = "Tom";
        public const string Jerry = "Jerry";

        public static Dictionary<string, int> VoteCountMapper;
       
        static SD()
        {
            VoteCountMapper = new Dictionary<string, int>
            {
                {Tom, 0},
                {Jerry, 0}
            };
        }

    }
}