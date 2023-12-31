import IEncoder from "../../ports/IEncoder"
import * as bcrypt from 'bcrypt'

export default class BcryptEncoder implements IEncoder {
    private readonly rounds: number = 10

    constructor(rounds: number) {
        this.rounds = rounds
    }

    async encode(plain: string): Promise<string> {
        return await bcrypt.hash(plain, this.rounds)
    }

    async compare(plain: string, hashed: string): Promise<boolean> {
        return await bcrypt.compare(plain, hashed)
    }
}
