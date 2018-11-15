module.exports = {
  calculateCompatability: (friendZodiac, userZodiac) => {
    let user = userZodiac;
    let friend = friendZodiac;
    let points = 0;
    switch (user) {
      case "Capricorn":
        {
          if (friend === "Capricorn") {
            points += 9;
          } else if (friend === "Aquarius") {
            points += 6;
          } else if (friend === "Pisces") {
            points += 12;
          } else if (friend === "Aries") {
            points += 9;
          } else if (friend === "Taurus") {
            points += 12;
          } else if (friend === "Gemini") {
            points += 3;
          } else if (friend === "Cancer") {
            points += 9;
          } else if (friend === "Leo") {
            points += 9;
          } else if (friend === "Virgo") {
            points += 12;
          } else if (friend === "Libra") {
            points += 3;
          } else if (friend === "Scorpio") {
            points += 12;
          } else if (friend === "Sagittarius") {
            points += 3;
          }
        }
        break;
      case "Aquarius":
        {
          if (friend === "Capricorn") {
            points += 8;
          } else if (friend === "Aquarius") {
            points += 9;
          } else if (friend === "Pisces") {
            points += 5;
          } else if (friend === "Aries") {
            points += 12;
          } else if (friend === "Taurus") {
            points += 1;
          } else if (friend === "Gemini") {
            points += 12;
          } else if (friend === "Cancer") {
            points += 1;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 16;
          } else if (friend === "Libra") {
            points += 12;
          } else if (friend === "Scorpio") {
            points += 3;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Pisces":
        {
          if (friend === "Capricorn") {
            points += 12;
          } else if (friend === "Aquarius") {
            points += 5;
          } else if (friend === "Pisces") {
            points += 5;
          } else if (friend === "Aries") {
            points += 7;
          } else if (friend === "Taurus") {
            points += 12;
          } else if (friend === "Gemini") {
            points += 3;
          } else if (friend === "Cancer") {
            points += 12;
          } else if (friend === "Leo") {
            points += 3;
          } else if (friend === "Virgo") {
            points += 12;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 12;
          } else if (friend === "Sagittarius") {
            points += 9;
          }
        }
        break;
      case "Aries":
        {
          if (friend === "Capricorn") {
            points += 9;
          } else if (friend === "Aquarius") {
            points += 12;
          } else if (friend === "Pisces") {
            points += 7;
          } else if (friend === "Aries") {
            points += 2;
          } else if (friend === "Taurus") {
            points += 6;
          } else if (friend === "Gemini") {
            points += 12;
          } else if (friend === "Cancer") {
            points += 1;
          } else if (friend === "Leo") {
            points += 12;
          } else if (friend === "Virgo") {
            points += 8;
          } else if (friend === "Libra") {
            points += 8;
          } else if (friend === "Scorpio") {
            points += 3;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Taurus":
        {
          if (friend === "Capricorn") {
            points += 9;
          } else if (friend === "Aquarius") {
            points += 1;
          } else if (friend === "Pisces") {
            points += 12;
          } else if (friend === "Aries") {
            points += 6;
          } else if (friend === "Taurus") {
            points += 9;
          } else if (friend === "Gemini") {
            points += 8;
          } else if (friend === "Cancer") {
            points += 5;
          } else if (friend === "Leo") {
            points += 1;
          } else if (friend === "Virgo") {
            points += 12;
          } else if (friend === "Libra") {
            points += 7;
          } else if (friend === "Scorpio") {
            points += 9;
          } else if (friend === "Sagittarius") {
            points += 8;
          }
        }
        break;
      case "Gemini":
        {
          if (friend === "Capricorn") {
            points += 3;
          } else if (friend === "Aquarius") {
            points += 12;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 12;
          } else if (friend === "Taurus") {
            points += 8;
          } else if (friend === "Gemini") {
            points += 7;
          } else if (friend === "Cancer") {
            points += 1;
          } else if (friend === "Leo") {
            points += 12;
          } else if (friend === "Virgo") {
            points += 3;
          } else if (friend === "Libra") {
            points += 12;
          } else if (friend === "Scorpio") {
            points += 7;
          } else if (friend === "Sagittarius") {
            points += 5;
          }
        }
        break;
      case "Cancer":
        {
          if (friend === "Capricorn") {
            points += 9;
          } else if (friend === "Aquarius") {
            points += 1;
          } else if (friend === "Pisces") {
            points += 12;
          } else if (friend === "Aries") {
            points += 1;
          } else if (friend === "Taurus") {
            points += 5;
          } else if (friend === "Gemini") {
            points += 1;
          } else if (friend === "Cancer") {
            points += 2;
          } else if (friend === "Leo") {
            points += 11;
          } else if (friend === "Virgo") {
            points += 11;
          } else if (friend === "Libra") {
            points += 7;
          } else if (friend === "Scorpio") {
            points += 12;
          } else if (friend === "Sagittarius") {
            points += 9;
          }
        }
        break;
      case "Leo":
        {
          if (friend === "Capricorn") {
            points += 9;
          } else if (friend === "Aquarius") {
            points += 8;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 12;
          } else if (friend === "Taurus") {
            points += 1;
          } else if (friend === "Gemini") {
            points += 12;
          } else if (friend === "Cancer") {
            points += 11;
          } else if (friend === "Leo") {
            points += 2;
          } else if (friend === "Virgo") {
            points += 1;
          } else if (friend === "Libra") {
            points += 12;
          } else if (friend === "Scorpio") {
            points += 8;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Virgo":
        {
          if (friend === "Capricorn") {
            points += 12;
          } else if (friend === "Aquarius") {
            points += 6;
          } else if (friend === "Pisces") {
            points += 12;
          } else if (friend === "Aries") {
            points += 8;
          } else if (friend === "Taurus") {
            points += 12;
          } else if (friend === "Gemini") {
            points += 3;
          } else if (friend === "Cancer") {
            points += 11;
          } else if (friend === "Leo") {
            points += 1;
          } else if (friend === "Virgo") {
            points += 11;
          } else if (friend === "Libra") {
            points += 7;
          } else if (friend === "Scorpio") {
            points += 2;
          } else if (friend === "Sagittarius") {
            points += 8;
          }
        }
        break;
      case "Libra":
        {
          if (friend === "Capricorn") {
            points += 3;
          } else if (friend === "Aquarius") {
            points += 12;
          } else if (friend === "Pisces") {
            points += 10;
          } else if (friend === "Aries") {
            points += 8;
          } else if (friend === "Taurus") {
            points += 7;
          } else if (friend === "Gemini") {
            points += 12;
          } else if (friend === "Cancer") {
            points += 7;
          } else if (friend === "Leo") {
            points += 12;
          } else if (friend === "Virgo") {
            points += 7;
          } else if (friend === "Libra") {
            points += 9;
          } else if (friend === "Scorpio") {
            points += 10;
          } else if (friend === "Sagittarius") {
            points += 12;
          }
        }
        break;
      case "Scorpio":
        {
          if (friend === "Capricorn") {
            points += 12;
          } else if (friend === "Aquarius") {
            points += 3;
          } else if (friend === "Pisces") {
            points += 12;
          } else if (friend === "Aries") {
            points += 3;
          } else if (friend === "Taurus") {
            points += 9;
          } else if (friend === "Gemini") {
            points += 7;
          } else if (friend === "Cancer") {
            points += 12;
          } else if (friend === "Leo") {
            points += 8;
          } else if (friend === "Virgo") {
            points += 2;
          } else if (friend === "Libra") {
            points += 10;
          } else if (friend === "Scorpio") {
            points += 12;
          } else if (friend === "Sagittarius") {
            points += 9;
          }
        }
        break;
      case "Sagittarius":
        {
          if (friend === "Capricorn") {
            points += 12;
          } else if (friend === "Aquarius") {
            points += 5;
          } else if (friend === "Pisces") {
            points += 3;
          } else if (friend === "Aries") {
            points += 12;
          } else if (friend === "Taurus") {
            points += 8;
          } else if (friend === "Gemini") {
            points += 5;
          } else if (friend === "Cancer") {
            points += 9;
          } else if (friend === "Leo") {
            points += 12;
          } else if (friend === "Virgo") {
            points += 8;
          } else if (friend === "Libra") {
            points += 12;
          } else if (friend === "Scorpio") {
            points += 9;
          } else if (friend === "Sagittarius") {
            points += 10;
          }
        }
        break;
    }

    // console.log("these are the ppoints " + points);
    return returnScore(points);
  }
};

function returnScore(points) {
  if (points <= 3) {
    return 1;
  } else if (points > 3 && points <= 6) {
    return 2;
  } else if (points > 6 && points <= 9) {
    return 3;
  } else if (points > 9 && points <= 12) {
    return 4;
  } else if (points === 12) {
    return 5;
  }
}

// function returnScore(points) {
//   if (points <= 3) {
//     return "This is a disasterous pairing. You have a hard time understanding each other, and are likely ill-prepared to read each other's reactions and moods. Miscommunication and frustration are likely down the road. Please proceed with caution.";
//   } else if (points >= 4 && points < 7) {
//     return "Hmmm this one can go either way. If you're willing to put in the effort to acquaint yourselves with each other's communication styles and idiosyncracies, you could find fulfillment in this relationship. But be wary — chances of hurt and misunderstanding are high. It can end in disaster just as easily as it could end in fulfillment.";
//   } else if (points >= 8 && points <= 10) {
//     return "This is a strong match. There might be some hesitation toward getting to know each other at first, but don't let fear triumph over curiosity. You have the chance to nurture a strong connection that will be both fulfilling and joyous.";
//   } else if (points > 10) {
//     return "Your star signs are as compatible as they come. You share a mutual understanding forged by complimentary energies. Whether your relationship is platonic, romantic, or otherwise, it will likely be a great source of fulfillment for both of you.";
//   }
// }
