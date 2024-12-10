enum Gift {
    Coal = 0,                         // 0
    Train = 1 << 0,                   // 1
    Bicycle = 1 << 1,                 // 2
    SuccessorToTheNintendoSwitch = 1 << 2,  // 4
    TikTokPremium = 1 << 3,          // binary: 0001000
    Vape = 1 << 4,                   // binary: 0010000
    Traditional = Gift.Train | Gift.Bicycle,        // binary: 0000011
    OnTheMove = Gift.Bicycle | Gift.TikTokPremium | Gift.Vape,  // binary: 0011010
    OnTheCouch = Gift.SuccessorToTheNintendoSwitch | Gift.TikTokPremium | Gift.Vape   // binary: 0011100
}