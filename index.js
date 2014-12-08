/**
* Valiate a NAICS codes using 2012 NAICS codes
*
* @param  {String} 2 to 6 digit numeric
* @return {Boolean}
*/
module.exports = {
  validateNaics: function(inNAICS) {

    inNAICS = inNAICS || "";
    if (inNAICS.length > 6) { return false }
    if (inNAICS.length < 2) { return false }
    return true;
  },

  /**
  * Valiate a NAICS codes using 2012 NAICS codes
  *
  * @param  {String} 2 to 6 digit numeric
  * @return {Boolean}
  */

  translateNAICS: function(inNAICS) {
    inNAICS = inNAICS || "000";

    if (inNAICS == "000") { return "Unknown"}

    return "Kevin"
  }
};
