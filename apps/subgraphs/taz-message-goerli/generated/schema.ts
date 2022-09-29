// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MemberAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MemberAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberAdded", id.toString(), this);
    }
  }

  static load(id: string): MemberAdded | null {
    return changetype<MemberAdded | null>(store.get("MemberAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    return value!.toBigInt();
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get identityCommitment(): BigInt {
    let value = this.get("identityCommitment");
    return value!.toBigInt();
  }

  set identityCommitment(value: BigInt) {
    this.set("identityCommitment", Value.fromBigInt(value));
  }
}

export class Message extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Message entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Message must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Message", id.toString(), this);
    }
  }

  static load(id: string): Message | null {
    return changetype<Message | null>(store.get("Message", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get parentMessageId(): BigInt {
    let value = this.get("parentMessageId");
    return value!.toBigInt();
  }

  set parentMessageId(value: BigInt) {
    this.set("parentMessageId", Value.fromBigInt(value));
  }

  get messageId(): BigInt {
    let value = this.get("messageId");
    return value!.toBigInt();
  }

  set messageId(value: BigInt) {
    this.set("messageId", Value.fromBigInt(value));
  }

  get messageContent(): string {
    let value = this.get("messageContent");
    return value!.toString();
  }

  set messageContent(value: string) {
    this.set("messageContent", Value.fromString(value));
  }

  get hasViolation(): boolean {
    let value = this.get("hasViolation");
    return value!.toBoolean();
  }

  set hasViolation(value: boolean) {
    this.set("hasViolation", Value.fromBoolean(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get violations(): Array<string> | null {
    let value = this.get("violations");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set violations(value: Array<string> | null) {
    if (!value) {
      this.unset("violations");
    } else {
      this.set("violations", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Violation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Violation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Violation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Violation", id.toString(), this);
    }
  }

  static load(id: string): Violation | null {
    return changetype<Violation | null>(store.get("Violation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reviewer(): Bytes {
    let value = this.get("reviewer");
    return value!.toBytes();
  }

  set reviewer(value: Bytes) {
    this.set("reviewer", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get message(): string {
    let value = this.get("message");
    return value!.toString();
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }
}
