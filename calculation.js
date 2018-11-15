module.exports = {
  calculateCompatability: (friendZodiac, userZodiac) => {
    let user = userZodiac;
    let friend = friendZodiac;
    // console.log(friendZodiac);
    // console.log(friend);
    let points = 0;
    switch (user) {
      case "Capricorn":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Aquarius":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Pisces":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Aries":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Taurus":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Gemini":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Cancer":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Leo":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Virgo":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Libra":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Scorpio":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Sagittarius":
        {
          if (friend === "Capricorn") {
            points += 1;
          } else if (friend === "Aquarius") {
            points += 2;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 4;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 6;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 9;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 11;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
    }

    console.log("these are the ppoints " + points);
    return returnScore(points);
  }
};

function returnScore(points) {
  if (points === 1) {
    return "You're basically mortal enemies. Please avoid each other at all costs.";
  } else if (points === 2) {
    return "Ehhhhhhhhhhh proceed with caution. You probably don't get along TOO well.";
  } else if (points === 3) {
    return "So. Your friendship will probably seem promising at first, but will likely go down in flames. Best of luck.";
  } else if (points === 4) {
    return "Your relationship will be tepid at best. Lukewarm conversations?  Hell yes.";
  } else if (points === 5) {
    return "You are kiiiiiind of compatible, but not really.";
  } else if (points === 6) {
    return "You're medium compatible! Not great, but! Ok!";
  } else if (points === 7) {
    return "Wowsers trousers man, y'all are doin great";
  } else if (points === 8) {
    return "You're pretty compatible, tbh.";
  } else if (points === 9) {
    return "Wow you're super compatable!";
  } else if (points === 10) {
    return "Wowowowowow nice nice nice please get married now";
  } else if (points === 11) {
    return "Damn. Pretty good.";
  } else if (points === 12) {
    return "Holy shit, are you married? Because you should be. ";
  }
}
