import { z } from "zod";

export const UserLogin = z.object({
	email: z
		.string({
			required_error: "Email tidak boleh kosong!",
		})
		.email({ message: "Email tidak valid" })
		.trim()
		.toLowerCase(),
	password: z
		.string({
			required_error: "Email tidak boleh kosong!",
		})
		.min(8, { message: "Password harus mengandung 8 karakter" })
		.max(20, { message: "Password tidak boleh melebihi 20 karakter" })
		.trim(),
});
const UserRegister = z
	.object({
		name: z
			.string({
				required_error: "Nama tidak boleh kosong!",
			})
			.min(2, { message: "Harus lebih dari 2 karakter" }),
		phoneNumber: z
			.string()
			.min(10, { message: "Nomor telepon tidak valid" })
			.max(14, { message: "Nomor telepon tidak valid" })
			.trim(),
		confirmPassword: z
			.string({
				required_error: "Email tidak boleh kosong!",
			})
			.min(8)
			.max(20)
			.trim(),
		city: z.string(),
		country: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password tidak cocok",
		path: ["confirm"],
	});

export const UserRegisterSchema = UserLogin.merge(UserRegister);
