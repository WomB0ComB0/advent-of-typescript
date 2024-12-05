type Graph = {
  '👊🏻': '🖐🏾';
  '🖐🏾': '✌🏽';
  '✌🏽': '👊🏻';
};

type WhoWins<
  Opponent extends RockPaperScissors,
  You extends RockPaperScissors,
> = Opponent extends You ? 'draw' : Opponent extends Graph[You] ? 'lose' : 'win';

type RockPaperScissors = keyof Graph;
