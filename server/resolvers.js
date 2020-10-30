
const apiResult= require('./server.js')


const testing2 = [
  {
    bike_id: 'Y3U3',
    lat: 38.860399,
    lon: -77.093833,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'I0C9',
    lat: 38.881738,
    lon: -77.10458,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O5K3',
    lat: 38.807772,
    lon: -77.130187,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Z3Q1',
    lat: 38.890402,
    lon: -77.086673,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Q1L7',
    lat: 38.859321,
    lon: -77.099135,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P6Z2',
    lat: 38.89137,
    lon: -77.084746,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Y5M7',
    lat: 38.88355,
    lon: -77.102445,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'D0H7',
    lat: 38.882195,
    lon: -77.11034,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'L4Q2',
    lat: 38.861216,
    lon: -77.094192,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B3N3',
    lat: 38.858662,
    lon: -77.098534,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O8U0',
    lat: 38.893601,
    lon: -77.078496,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C0T1',
    lat: 38.858648,
    lon: -77.098532,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H6T6',
    lat: 38.858685,
    lon: -77.098561,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O9S4',
    lat: 38.874337,
    lon: -77.153193,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H7G6',
    lat: 38.879542,
    lon: -77.112578,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'X3P5',
    lat: 38.880995,
    lon: -77.109325,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'X6J3',
    lat: 38.886555,
    lon: -77.09642,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'U3J3',
    lat: 38.880095,
    lon: -77.113257,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'W1P7',
    lat: 38.800799,
    lon: -77.126793,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'F8J1',
    lat: 38.885496,
    lon: -77.103333,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C4N0',
    lat: 38.852823,
    lon: -77.101436,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'R7N1',
    lat: 38.888435,
    lon: -77.083543,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B9E9',
    lat: 38.887233,
    lon: -77.09537,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'J1E2',
    lat: 38.887053,
    lon: -77.095028,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'E5Q9',
    lat: 38.892627,
    lon: -77.08125,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H6I6',
    lat: 38.888554,
    lon: -77.083511,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'D3X9',
    lat: 38.800921,
    lon: -77.126498,
    is_reserved: 1,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B6H2',
    lat: 38.84841,
    lon: -77.117522,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'F3E9',
    lat: 38.888591,
    lon: -77.083593,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'U0C6',
    lat: 38.882633,
    lon: -77.110372,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P0A0',
    lat: 38.878889,
    lon: -77.113728,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'J6A8',
    lat: 38.894651,
    lon: -77.082878,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'F0M8',
    lat: 38.88386,
    lon: -77.104433,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B6S8',
    lat: 38.891347,
    lon: -77.084831,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'A1F9',
    lat: 38.868428,
    lon: -77.071441,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Z0X3',
    lat: 38.886683,
    lon: -77.094734,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Q1A2',
    lat: 38.886869,
    lon: -77.08433,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'K9I3',
    lat: 38.88274,
    lon: -77.103143,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Y4L6',
    lat: 38.859846,
    lon: -77.050319,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B5D5',
    lat: 38.862779,
    lon: -77.08712,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'F7P7',
    lat: 38.883861,
    lon: -77.093599,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P8J7',
    lat: 38.884425,
    lon: -77.095514,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O1Q4',
    lat: 38.879463,
    lon: -77.112851,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'J3V8',
    lat: 38.88697,
    lon: -77.093023,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'N7A1',
    lat: 38.890485,
    lon: -77.088079,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'T2W7',
    lat: 38.890502,
    lon: -77.085077,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H0V3',
    lat: 38.888348,
    lon: -77.095039,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Z4Q3',
    lat: 38.866635,
    lon: -77.080923,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C6D7',
    lat: 38.887291,
    lon: -77.095417,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P7K0',
    lat: 38.864779,
    lon: -77.063535,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'S4A5',
    lat: 38.887576,
    lon: -77.091705,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'L5S5',
    lat: 38.864122,
    lon: -77.063501,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'J1P2',
    lat: 38.842518,
    lon: -77.113013,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O1N7',
    lat: 38.897528,
    lon: -77.117763,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'D5S1',
    lat: 38.88848,
    lon: -77.094168,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C8V1',
    lat: 38.889615,
    lon: -77.08828,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'S6O1',
    lat: 38.862331,
    lon: -77.088217,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Q4G8',
    lat: 38.863457,
    lon: -77.059771,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'A7A9',
    lat: 38.85195,
    lon: -77.044003,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'N8Y1',
    lat: 38.885975,
    lon: -77.103468,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'K9J8',
    lat: 38.862614,
    lon: -77.080834,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'M8R3',
    lat: 38.890519,
    lon: -77.086153,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'A4L2',
    lat: 38.886124,
    lon: -77.096992,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'N4N1',
    lat: 38.890643,
    lon: -77.085055,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O6Z8',
    lat: 38.873381,
    lon: -77.108633,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'U8D7',
    lat: 38.86261,
    lon: -77.079964,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H9A0',
    lat: 38.863039,
    lon: -77.05315,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'N7J8',
    lat: 38.882321,
    lon: -77.112669,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'L8B1',
    lat: 38.889229,
    lon: -77.087326,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'S3B3',
    lat: 38.887979,
    lon: -77.094474,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C9W4',
    lat: 38.888845,
    lon: -77.077663,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'R7G2',
    lat: 38.864626,
    lon: -77.078615,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'S9Y9',
    lat: 38.856568,
    lon: -77.050847,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P5Q0',
    lat: 38.879241,
    lon: -77.109099,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B8G4',
    lat: 38.887564,
    lon: -77.09150700000001,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'L0J6',
    lat: 38.863831,
    lon: -77.084383,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'E0I5',
    lat: 38.8912,
    lon: -77.085731,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H8N7',
    lat: 38.879277,
    lon: -77.114203,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'B4G5',
    lat: 38.862607,
    lon: -77.080599,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P4S3',
    lat: 38.879985,
    lon: -77.111255,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'K0T7',
    lat: 38.887579,
    lon: -77.091685,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O4X7',
    lat: 38.886477,
    lon: -77.086726,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C2M0',
    lat: 38.800994,
    lon: -77.126652,
    is_reserved: 1,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'E5A5',
    lat: 38.857342,
    lon: -77.100415,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'H5R2',
    lat: 38.886523,
    lon: -77.094875,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'U5H1',
    lat: 38.863552,
    lon: -77.084132,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'O6I9',
    lat: 38.862001,
    lon: -77.053584,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'P4Y7',
    lat: 38.884608,
    lon: -77.094699,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'Q8Y8',
    lat: 38.86215,
    lon: -77.054178,
    is_reserved: 1,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'F1S0',
    lat: 38.887746,
    lon: -77.095157,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'R4T2',
    lat: 38.865784,
    lon: -77.075796,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'G4D7',
    lat: 38.888832,
    lon: -77.093122,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'C0B8',
    lat: 38.902724,
    lon: -77.0357,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'D7G8',
    lat: 38.887546,
    lon: -77.091703,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'S8E5',
    lat: 38.908064,
    lon: -77.035785,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'M1Q6',
    lat: 38.800935,
    lon: -77.12617,
    is_reserved: 1,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'R2G1',
    lat: 38.870806,
    lon: -77.144004,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  },
  {
    bike_id: 'L1V5',
    lat: 38.890583,
    lon: -77.075942,
    is_reserved: 0,
    is_disabled: 0,
    vehicle_type: 'scooter'
  }
]

const Query = {

greetings: ()=> "hello you are getting closer",


allbikes:()=> {
    console.log(testing2)
    return testing2},

// bike: (parent,{bike_id},testing2,info)=> testing2.find( o=> o.bike_id === bike_id) 
bike:(root,{bike_id},context,info)=> { 
  
    let result1 =testing2.filter((a)=>{
        return bike_id === a.bike_id
    })

    // let result=[];
    // for( let i =0;i<testing2.length;i++){
    //     if(testing2[i].bike_id=== args.bike_id){
    //         result.push(testing2[i])
    //     }
    // }
    console.log(result1)
     return result1
}



}





// bike:(root,args,context,info)=> { 
  
//     let result1 =testing2.filter((a)=>{
//         return args.bike_id === a.bike_id
//     })

//     // let result=[];
//     // for( let i =0;i<testing2.length;i++){
//     //     if(testing2[i].bike_id=== args.bike_id){
//     //         result.push(testing2[i])
//     //     }
//     // }
//     console.log(result1)
//      return result1
// }
module.exports={Query}