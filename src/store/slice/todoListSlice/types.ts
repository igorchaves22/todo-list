import { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "~types";

export type StringActionType = PayloadAction<string>;
export type TaskActionType = PayloadAction<ITask>;
