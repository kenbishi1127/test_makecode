//% color=#0fbc11 weight=100 icon="\uf1eb"
namespace myCustomBlocks {
    /**
     * サンプル：2 つの数値を加算するブロック
     * @param a 最初の値
     * @param b 2 番目の値
     * @returns 合計値
     */
    //% block="add $a and $b"
    export function add(a: number, b: number): number {
        return a + b;
    }
}
