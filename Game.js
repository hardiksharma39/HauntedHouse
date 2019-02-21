const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast"),
    TALK:Symbol("talk"),
    WATCH:Symbol("watch"),
    AFRAID:Symbol("afraid"),
    DIE:Symbol("die"),
    TRUTH:Symbol("truth"),
    THINK:Symbol("think"),
    BELIEVE:Symbol("believe"),
    KILL:Symbol("kill"),
    SEE:Symbol("see"),
    JOIN:Symbol("join"),
    YEP:Symbol("yep")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "hello";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Welcome to the conjuring house game....Do you wana play or not?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Do you wana exit the game?";
                }else{
                    sReply ="Are you older than 18?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("no")){
                    sReply = "You are not old enough to play this game."
                    
                }else{
                    sReply = "Lets start the game.. yes or no";
                    this.stateCur = GameState.BUTLER;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Would you like to talk with a ghost?";
                    this.stateCur = GameState.TOAST;
    
                }
                break;
            case GameState.TOAST:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Hi i am VALAK .. Are You Human?";
                    this.stateCur = GameState.TALK;
    
                }
                break;
            case GameState.TALK:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Do you believe your ancestors are watching you?";
                    this.stateCur = GameState.WATCH;
    
                }
                break;
            case GameState.WATCH:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Are you afraid of them?";
                    this.stateCur = GameState.AFRAID;
    
                }
                break;
                case GameState.AFRAID:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "DO you love talking risks?";
                    this.stateCur = GameState.DIE;
    
                }
                break;
                case GameState.DIE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "What if you die today?";
                    this.stateCur = GameState.TRUTH;
    
                }
                break;
                case GameState.TRUTH:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Do you think that there is truth behind superstitions?";
                    this.stateCur = GameState.THINK;
    
                }
                break;
                case GameState.THINK:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Do you believe me totally?";
                    this.stateCur = GameState.BELIEVE;
    
                }
                break;
                case GameState.BELIEVE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "I am standing at you back right now !! do you believe?";
                    this.stateCur = GameState.KILL;
    
                }
                break;
                case GameState.KILL:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Should i kill you?";
                    this.stateCur = GameState.SEE;
    
                }
                break;
                case GameState.SEE:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "well i can see you are not afraid of me !";
                    this.stateCur = GameState.JOIN;
    
                }
                break;
                case GameState.JOIN:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "Do you wana come and join my team of ghosts?";
                    this.stateCur = GameState.YEP;
    
                }
                break;
                case GameState.YEP:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Quit!";
                    ;
                }else{
                    sReply = "You won .. you are not afraid ..";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
                
        }

        return([sReply]);
    }
}