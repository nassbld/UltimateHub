import { Stats } from "./stats";
import { WorkRate } from "./work-rate";

export interface Player {
    id: number;
    firstName?: string;
    lastName?: string;
    name: string;
    height: number;
    weight: number;
    gender: string;
    birthDate: Date;
    age: number;
    position: string;
    foot: string;
    weakFoot: number;
    skillMoves: number;
    rating: number;
    imageUrl: string;
    color: string;
    workRate: WorkRate;
    stats: Stats;
    idNationality: number;
    idClub: number;
}
