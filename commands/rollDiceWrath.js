const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rollwrath')
        .setDescription('Roll dice using format "xDx"(Wrath and Glory)')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Please input number and size of dice roll(ex.4d6 format)')),
                async execute(interaction){
                    input = interaction.options.getString(`input`).toUpperCase();
                    if(input[0]=='-'){
                        await interaction.reply(`You cannot roll negative numbers`)
                    }
                    let iNumberOfDice=0;
                    for (const iterator of input) {
                        if(Number.isNaN(parseInt(iterator))==false){
                            iNumberOfDice=(iNumberOfDice*10)+(+iterator);
                            continue;
                        }
                        if(iterator=='D'){
                            break;
                        }
                        await interaction.reply(`incorrect format. Please try again using the format of (NumberOfDice)D(SizeOfDice)`);
                        return;
                    }

                    input = input.slice(iNumberOfDice.toString().length+1);

                    if(input[0]=='-'){
                        await interaction.reply(`You cannot roll negative numbers`)
                    }
                    let iSizeOfDice=0;
                    for (const iterator of input) {
                        if(Number.isNaN(parseInt(iterator))==false){
                            iSizeOfDice=(iSizeOfDice*10)+(+iterator);
                            continue;
                        }
                        await interaction.reply(`incorrect format. Please try again using the format of (NumberOfDice)D(SizeOfDice)`);
                        return;
                    }

                    //Roll dice
                    const result = fRollDice(iNumberOfDice,iSizeOfDice);

                    //Check for Wrath or Complication
                    let wrath='Neither';
                    if(result[1][0]==1){
                        wrath=`Complication!`;
                    }
                    if(result[1][0]==6){
                        wrath=`Wrath!`;
                    }
                    
                    //Count hits
                    let hits=0;
                    for (const iterator of result[1]) {
                        if(iterator==6){
                            hits=hits+2;
                        } else if(iterator>3){
                            hits++;
                        }
                    }

                    await interaction.reply(`Dice Roll:${iNumberOfDice}D${iSizeOfDice}\nHits:${hits},${wrath}\nResults:${result[1]}`);
/*                     if(!(input.includes(`D`))){
                        await interaction.reply(`incorrect format. Please try again using the format of (NumberOfDice)D(SizeOfDice)`);
                        return;
                    };
                    const inputSplit = input.split(`D`);
                    const iNumberOfDice = inputSplit[0];
                    const iSizeOfDice = inputSplit[1];
                    if(Number.isInteger(iNumberOfDice)||Number.isInteger(iSizeOfDice)){
                        await interaction.reply(`incorrect format. Please try again using the format of (NumberOfDice)D(SizeOfDice)`);
                        return;
                    } else {
                        result = fRollDice(iNumberOfDice,iSizeOfDice);
                        await interaction.reply(`Dice Roll:${iNumberOfDice}D${iSizeOfDice}\nTotal:${result[0]}\nResults:${result[1]}`);
                    } */
                }

}

fRollDice = function(iNumberOfDice,iSizeOfDice,iDrop=0){
    //Guard clause that returns zero if function drops all (or more than all) dice
    if(Math.abs(iDrop)>iNumberOfDice){
        return 0;
    }

    const lRolls = [];//Container for rolled numbers
    var iCurrent=0;//Currently rolled dice
    var iTotal=0;//Running total

    //The Actual Dice rolling happens here
    //For the number of dice I'm rolling..
    for(i=0;i<iNumberOfDice;i++){
        //Roll dice
        iCurrent = Math.floor(Math.random()*iSizeOfDice+1);

        //Keep track of all rolls
        lRolls.push(iCurrent);

        //and update running total
        iTotal+=iCurrent;
    }

    //if I'm not dropping high or low rolls, return current total
    if(iDrop===0){
        return([iTotal,lRolls]);
    }

    else{
        //first, we order the rolls
        lRolls.sort(function(a,b){
            return a-b;
        })

        //drop lows
        if (iDrop<0){
            iDrop=Math.abs(iDrop);

            for(i;i<iDrop;i++){
                iTotal-=lRolls.pop[0];
            }
        }

        //drop highs
        else{
            for(i;i<iDrop;i++){
                iTotal-=lRolls.pop[lRolls.length];
            }
        }
    }

    //return total roll
    return(iTotal);
}