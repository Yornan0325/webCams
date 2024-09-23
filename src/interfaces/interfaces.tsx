 export interface UserText {
  imageUrl: string | undefined;
  createdAt: Date;
  fhotoUrl:string
  id: string;
  text: string;
  description: string;
  name: string;
}
export interface UserText {
  type: "Success" | "Error" | "Warning";
  message: string;
}
 
