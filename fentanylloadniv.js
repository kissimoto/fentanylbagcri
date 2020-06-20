function fentaprocess(){

    const weight = document.getElementById('weight').value
    const loadingDoseRate = document.getElementById('loadingDoseRate').value
  
    const weightxdose = weight * loadingDoseRate
    console.log(weightxdose)

    const loadingDose = weightxdose / 50
    var roundednumber = (Math.round(loadingDose * 100) / 100).toFixed(2);
    console.log(roundednumber)

// document.write(`<br><h3>Fentanyl's loading dose is ${roundednumber} ml</h3>`)
// document.close();

document.getElementById('result2').innerHTML = (`<h3>Loading dose is ${roundednumber} mls SLOW IV</h3>`)

}

function fentanylIVprocess(){
    const weight = document.getElementById('weight').value
    const dose_rate = document.getElementById('dose_rate').value
    const plannedFluidRate = document.getElementById('plannedFluidRate').value
    const bagSize = document.getElementById('bagSize')
 
    // 1. Calculate fluid administration rate by multiplying
    // 'plannedFluidRate' by 'weight'.
 
    const pfr = plannedFluidRate * weight
    console.log(pfr)

    // 2. Medikamentenberechnung = 'dose_rate' geteilt durch 'pfr'
   
    const drugMlFluid = dose_rate / plannedFluidRate
    console.log (drugMlFluid)

    // 3. Totaldosierung mit dem Medikament Fentanyl
     
    const ivBagSize = bagSize.value
    console.log(ivBagSize)

    const totalDrug = drugMlFluid * ivBagSize
    console.log(totalDrug)

    // 4. Gesamtberechnung des Medikamentes 'drugVolume'

    const drugVolume = totalDrug / 0.05
    console.log(drugVolume)

    const drugVolumeInMicrogram = drugVolume / 1000

    const drugVolInMicroRound = (Math.round(drugVolumeInMicrogram * 100) / 100).toFixed(2)

    
    //  document.getElementById('result').innerHTML = "Fluid rate per hour = " + s + " ml/hr <br>Drug volume = "  
    //  + drugVolInMicroRound + " ml." 

    // document.getElementById('result').innerHTML = "Fluid rate per hour = " + (Math.round(pfr * 100) / 100).toFixed(2) + " <br>Drug volume = "  
    // + drugVolInMicroRound + "ml."

     document.getElementById('result').innerHTML = (`<h3>Fluid rate per hour ${pfr} ml/hr <br>Drug volume = ${drugVolInMicroRound} ml</h3>`)
}