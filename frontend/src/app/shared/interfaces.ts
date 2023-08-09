export interface DialogData {
  animal: string;
  name: string;
}

export interface ITank {
  id: number;
  capacity: number;
  nature: string;
  site: string;
}

export interface IPump {
  id: number;
  quantity: number;
  nature: string;
  tankId: number;
}
