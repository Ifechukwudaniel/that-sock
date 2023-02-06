import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  Approval,
  ApprovalForAll,
  Transfer,
  OwnershipTransferred

} from "../generated/ThisSocks/ThisSocks";
import { Purpose, Sender } from "../generated/schema";

export function handleApproval(event: Approval): void {
  
}


export function handleApprovalForAll(event:ApprovalForAll):void {

}

export function handleOwnershipTransferred(event: OwnershipTransferred):void {

}

export function handleTransfer(event:Transfer):void {
  
}