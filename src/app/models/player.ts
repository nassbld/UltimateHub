import { Stats } from "./stats";
import { WorkRate } from "./work-rate";
import {AdvancedStats} from "./advanced-stats";

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
    color: string;
    workRate: WorkRate;
    stats: Stats;
    advancedStats?: AdvancedStats;
    idNationality: number;
    idClub: number;
}
