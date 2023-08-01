import {sapa,convert, filterData, checkScore} from './libs/solutions'

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'sapa':
        let nama = args[1];
        console.log(sapa(nama))
        
        break;
    case 'convert':
        const params = args.slice(1);
        let[name,address,age]=params;
        console.log(convert(name,address,age));
    break;

    case "filter":
        const namaKelas = args[1];
        console.log(filterData(namaKelas));
    break;

    case 'checkScore':
        const inputString = process.argv[2];
        console.log(checkScore(inputString));
    break;

    default:
        console.log("function tidak ditemuka");
        break;
}