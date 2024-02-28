public class Card
{
    public Guid Id { get; set; }
    public Guid OracleId { get; set; }
    public Guid[] MultiverseIds { get; set; }
    public int TCGPlayerId { get; set; }
    public int CardMarketId { get; set; }
    public String Name { get; set; }
    public DateTime ReleaseAt { get; set; }
    public Uri Uri { get; set; }
    public Uri ScryfallUri { get; set; }
    public String Layout { get; set; }
    public bool HighResImage { get; set; }
    public String ImageStatus { get; set; }
    public String CastingCost { get; set; }
    public int CMC { get; set; }
    public String ManaCost { get; set; }
    public String TypeLine { get; set; }
    public String[] ImageUris { get; set; }
    public int Power { get; set; }
    public int Toughness { get; set; }
    public Char[] Colors { get; set; }
    public Char[] ColorIdentity { get; set; }
    public String[] Keywords { get; set; }
    public String[] Legalities { get; set; }
    public String[] Games { get; set; }
    public bool Reserved { get; set; }
    public bool Foil { get; set; }
    public bool NonFoil { get; set; }
    public String[] Finishes { get; set; }
    public bool Oversized { get; set; }
    public bool Promo { get; set; }
    public bool Reprint { get; set; }
    public bool Variation { get; set; }
    public Guid SetId { get; set; }
    public String Set { get; set; }
    public String SetName { get; set; }
    public String Rarity { get; set; }
    public String Artist { get; set; }
}