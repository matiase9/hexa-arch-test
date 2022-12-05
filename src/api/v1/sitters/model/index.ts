class Sitters {
  private sitter_email: String;
  private sitter: String;
  private sitter_phone_number: String;
  private profile_score: String;
  private ratings_score: String;
  private search_score: String;
  private stay_list: Object;

  constructor(Param) {
    this.sitter_email = Param.sitter_email;
    this.sitter = Param.sitter;
    this.sitter_phone_number = Param.sitter_phone_number;
    this.profile_score = Param.profile_score;
    this.ratings_score = Param.ratings_score;
    this.search_score = Param.search_score;
    this.stay_list = Param.stay_list;
  }
}

export default Sitters;