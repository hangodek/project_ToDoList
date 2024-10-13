package models

import "time"

type List struct {
	Id        int       `json:"id"`
	Text      string    `json:"text"`
	Checked   bool      `json:"checked"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
