package models

import "time"

type List struct {
	Id         int       `json:"id"`
	Text       string    `json:"text"`
	CreatedAt  time.Time `json:"created_at"`
	UpadatedAt time.Time `json:"updated_at"`
}
