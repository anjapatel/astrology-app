module.exports = {
  createZodiac: user => {
    let zod_signs = [
      "Capricorn",
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius"
    ];
    // console.log("this is the user " + user);
    let day = user.birthday;
    let month = user.birthmonth - 1;
    let zodiacSign = "";
    // console.log("This is the user birth mont" + user.birthmonth);
    // console.log("This is the user birth day" + user.birthday);
    switch (month) {
      case 0:
        {
          //January
          if (day < 20) zodiacSign = zod_signs[0];
          else zodiacSign = zod_signs[1];
        }
        break;
      case 1:
        {
          //February
          if (day < 19) zodiacSign = zod_signs[1];
          else zodiacSign = zod_signs[2];
        }
        break;
      case 2:
        {
          //March
          if (day < 21) zodiacSign = zod_signs[2];
          else zodiacSign = zod_signs[3];
        }
        break;
      case 3:
        {
          //April
          if (day < 20) zodiacSign = zod_signs[3];
          else zodiacSign = zod_signs[4];
        }
        break;
      case 4:
        {
          //May
          if (day < 21) zodiacSign = zod_signs[4];
          else zodiacSign = zod_signs[5];
        }
        break;
      case 5:
        {
          //June
          if (day < 21) zodiacSign = zod_signs[5];
          else zodiacSign = zod_signs[6];
        }
        break;
      case 6:
        {
          //July
          if (day < 23) zodiacSign = zod_signs[6];
          else zodiacSign = zod_signs[7];
        }
        break;
      case 7:
        {
          //August
          if (day < 23) zodiacSign = zod_signs[7];
          else zodiacSign = zod_signs[8];
        }
        break;
      case 8:
        {
          //September
          if (day < 23) zodiacSign = zod_signs[8];
          else zodiacSign = zod_signs[9];
        }
        break;
      case 9:
        {
          //October
          if (day < 23) zodiacSign = zod_signs[9];
          else zodiacSign = zod_signs[10];
        }
        break;
      case 10:
        {
          //November
          if (day < 22) zodiacSign = zod_signs[10];
          else zodiacSign = zod_signs[11];
        }
        break;
      case 11:
        {
          //December
          if (day < 22) zodiacSign = zod_signs[11];
          else zodiacSign = zod_signs[0];
        }
        break;
    }
    return zodiacSign;
  }
};
