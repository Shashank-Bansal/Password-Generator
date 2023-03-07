function Generate(upper: boolean, lower: boolean, number: boolean, symbol: boolean, length: number = 20): string {
    // if (!upper && !lower && !number && !symbol)
    //     return "";

    // if (api) {
    //     let url = `https://www.psswrd.net/api/v1/password/?length=${length}&lower=`;
    //     url += lower ? '1' : '0';
    //     url += '&upper='
    //     url += upper ? '1' : '0';
    //     url += '&int='
    //     url += number ? '1' : '0';
    //     url += '&special='
    //     url += symbol ? '1' : '0';

    //     let str = "";

    //     const fetchApi = async () => {
    //         try {
    //             const response = await axios.get(url);
    //             // return response.data.password as string;
    //             console.log("api working");
    //             console.log(str);
    //             return str;

    //         }
    //         catch (e) {
    //             alert("Api not working right now. Please generate password without API.")
    //             // str ="";
    //         }
    //     }

    //     console.log(fetchApi())
    //     console.log(str);
    //     return str;
    // }

    let r: string = "^";
    const arr: string[] = [];
    let count: number = 0;
    if (upper) {
        r += "(?=.*[A-Z])"
        arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        count++;
    }
    if (lower) {
        r += "(?=.*[a-z])"
        arr.push("abcdefghijklmnopqrstuvwxyz");
        count++;
    }
    if (number) {
        r += "(?=.*\\d)"
        arr.push("0123456789");
        count++;
    }
    if (symbol) {
        r += "(?=.*\\W)"
        arr.push("!@#$%^&*()_+-=[]{};':\"\\|,.<>/?");
        count++;
    }

    if (count > length) {
        alert("Invalid length");
        return "";
    }

    r += `.{${length}}$`
    const re = new RegExp(r);

    let s = "";
    do {
        s = "";
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * arr.length);
            s += arr[index][Math.floor(Math.random() * arr[index].length)];
        }
    } while (!re.test(s));

    return s;
}

export default Generate;