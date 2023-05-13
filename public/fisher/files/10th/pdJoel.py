"""
# Strategy Explanation
* Cooperate for the first two moves.
* If opponent has defected, defect them in next move.
* Only try to break out of the defection forever loop, once. If both sides defect for three moves in a row, try to cooperate for two rounds.

"""


class PDStrat:
    def getName(self):
        return "Joel Grayson"


    def has_tried_to_cooperate(self, lst): #has tried to cooperate more than one move ago in the past
        for i in range(len(lst)-3): #exclude last three els because that is still in the middle of cooperating
            # Dev inspecting: print(lst[i:i+3], '\t', [False, True, True], '\t', lst[i:i+3]==[False, True, True])
            if lst[i:i+3]==[False, True, True]: #in the past, has tried cooperating for two moves
                return True
        return False #otherwise when no occurence

    def getMove(
        self,
        hist, #my move history
        opp_hist, #opponent's move history
    ) -> bool:
        if len(hist)<=1: #cooperate for first two moves
            return True

        # opp_cooperate_perc=sum(opp_hist) / len(opp_hist) #percentage of opponent's cooperation
        
        if len(hist)>=4:
            if not self.has_tried_to_cooperate(hist): #has not tried cooperating yet
                # If defecting for three rounds in a row, try to cooperate once
                # First move in cooperating
                if hist[-3:]==[False, False, False] and opp_hist[-3:]==[False, False, False]:
                    return True
                # Second move in cooperating
                if hist[-3:]==[False, False, True]:
                    return True
                #Third move in cooperating
                if hist[-3]==[False, True, True]:
                    if opp_hist[-1]==True: #if starting to cooperate
                        return True
        
        #if opponent has defected, defect back
        #if in cooperating chain
        if opp_hist is not None:
            return opp_hist[-1]
        
        return False #catch errors

