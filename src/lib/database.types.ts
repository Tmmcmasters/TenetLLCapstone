export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      apartment: {
        Row: {
          address: string | null
          apartmentNumber: number | null
          complexName: string | null
          complexNumber: number | null
          created_at: string
          description: string | null
          id: number
          landlordId: number | null
          modified_at: string | null
          name: string | null
        }
        Insert: {
          address?: string | null
          apartmentNumber?: number | null
          complexName?: string | null
          complexNumber?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landlordId?: number | null
          modified_at?: string | null
          name?: string | null
        }
        Update: {
          address?: string | null
          apartmentNumber?: number | null
          complexName?: string | null
          complexNumber?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landlordId?: number | null
          modified_at?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "apartment_complexNumber_fkey"
            columns: ["complexNumber"]
            isOneToOne: false
            referencedRelation: "apartment complex"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "apartment_landlordId_fkey"
            columns: ["landlordId"]
            isOneToOne: false
            referencedRelation: "landlord"
            referencedColumns: ["id"]
          }
        ]
      }
      "apartment complex": {
        Row: {
          address: string | null
          created_at: string
          description: string | null
          id: number
          landlordId: number | null
          modified_at: string | null
          name: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          description?: string | null
          id?: number
          landlordId?: number | null
          modified_at?: string | null
          name?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          description?: string | null
          id?: number
          landlordId?: number | null
          modified_at?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "apartment complex_landlordId_fkey"
            columns: ["landlordId"]
            isOneToOne: false
            referencedRelation: "landlord"
            referencedColumns: ["id"]
          }
        ]
      }
      landlord: {
        Row: {
          created_at: string
          email: string | null
          firstName: string | null
          fullName: string | null
          id: number
          lastName: string | null
          modified_at: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          fullName?: string | null
          id?: number
          lastName?: string | null
          modified_at?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          fullName?: string | null
          id?: number
          lastName?: string | null
          modified_at?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "landlord_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          content: string | null
          created_at: string
          id: number
          modified_at: string | null
          ticketId: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          modified_at?: string | null
          ticketId?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          modified_at?: string | null
          ticketId?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_ticketId_fkey"
            columns: ["ticketId"]
            isOneToOne: false
            referencedRelation: "ticket"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notification: {
        Row: {
          active: boolean | null
          created_at: string
          description: string | null
          id: number
          modified_at: string | null
          ticketId: string | null
          title: string | null
          userId: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          id?: number
          modified_at?: string | null
          ticketId?: string | null
          title?: string | null
          userId?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          id?: number
          modified_at?: string | null
          ticketId?: string | null
          title?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_ticketId_fkey"
            columns: ["ticketId"]
            isOneToOne: false
            referencedRelation: "ticket"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "notification_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tenet: {
        Row: {
          apartmentId: number | null
          confirmationCode: string | null
          created_at: string
          email: string | null
          firstName: string | null
          id: number
          lastName: string | null
          modified_at: string | null
          userId: string | null
        }
        Insert: {
          apartmentId?: number | null
          confirmationCode?: string | null
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          modified_at?: string | null
          userId?: string | null
        }
        Update: {
          apartmentId?: number | null
          confirmationCode?: string | null
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          modified_at?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenet_apartmentId_fkey"
            columns: ["apartmentId"]
            isOneToOne: false
            referencedRelation: "apartment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenet_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ticket: {
        Row: {
          active: boolean | null
          created_at: string
          description: string | null
          landlordId: number | null
          modified_at: string | null
          priority: string | null
          summary: string | null
          tenetId: number | null
          uuid: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          landlordId?: number | null
          modified_at?: string | null
          priority?: string | null
          summary?: string | null
          tenetId?: number | null
          uuid: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          landlordId?: number | null
          modified_at?: string | null
          priority?: string | null
          summary?: string | null
          tenetId?: number | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_landlordId_fkey"
            columns: ["landlordId"]
            isOneToOne: false
            referencedRelation: "landlord"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_tenetId_fkey"
            columns: ["tenetId"]
            isOneToOne: false
            referencedRelation: "tenet"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
