# Nhà chung

## Tính năng chính

- **Đếm ngày yêu**: Theo dõi số ngày yêu của bạn và người bạn yêu.
- **Sổ tiết kiệm**: Quản lý tiền bạc và tiết kiệm.
- **Sổ kế hoạch**: Lên kế hoạch cho các hoạt động, đi chơi, và các sự kiện khác.
- **Hòm thư cảm xúc**: Ghi chép tâm tư, giận dỗi và các cảm xúc khác.

## Triển khai

- **Frontend**: ReactJS, Shadcn, TailwindCSS
- **Backend**: NodeJS, Socket.IO, MongoDB
- **Mobile App**: Capacitor

## Dự kiến Realease

28/10/2024

## Tham khảo

- [Figma Design](https://www.figma.com/design/9VU7sOepW4EH6Ijmc0sNkM/LoveMe.-(Community)?node-id=0-1&node-type=CANVAS&t=702kg40s0m7DQy54-0)

## Tham khảo Database cơ bản

```json
const db = {
  "account": {
    "email": "string",
    "password": "string"
  },
  "user_info": {
    "id": "string",
    "_account_id": "string",
    "username": "string",
    "email": "string",
    "age": "string",
    "_mate_id": "string",
    "avatar": "string",
    "isSingle": "boolean",
    "nickname": "string",
    "_common_house_id": "string"
  },
  "notification": {
    // TODO: Notification for users (include system,...)
    "id": "string"
  },
  "common_house": {
    // TODO: Create Common house with mate, #must be relationship
    "id": "string",
    "isLock": "boolean",
    "invite_link": "string",
    "house_name": "string",
    "_box_love_id": "string",
    "_count_love_id": "string",
    "_plan_love_id": "string",
    "_money_plan_id": "string"
  },
  "count_love": {
    // TODO: Count love days of couple
    "id": "string",
    "user_ids": ["string"],
    "days": "number",
    "point_love": "number",
    "_box_love_id": "string"
  },
  "box_love": {
    // TODO: create box love to share with mate
    "id": "string",
    "_mate_id": "string",
    "isLock": "boolean",
    "password": "string",
    "heading": "string",
    "content": "string",
    "solution": ["string"],
    "isAccept": "boolean",
    "isDelete": "number",
    "isCheckForMate": "boolean",
    "created": "Datetime"
  },
  "plan_love": {
    // TODO: Create plan trip with mate
    "id": "string",
    "heading": "string",
    "content": "string",
    "_type_money": "string",
    "money": "number",
    "start_date": "Datetime",
    "end_date": "Datetime",
    "isDelete": "number"
  },
  "money_plan": {
    // TODO: Create type and manage money
    "id": "string",
    "heading": "string",
    "content": "string",
    "money": "number",
    "type_money": "string",
    "target": "number"
  },
  "post_love": {
    // TODO: Post love is create in community category
    "id": "string",
    "content": "string",
    "file": ["string"],
    "like": "number",
    "common_house_id": "string"
  }
}
