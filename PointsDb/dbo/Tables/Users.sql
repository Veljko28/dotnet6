﻿CREATE TABLE [dbo].[Users]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[UserName] NVARCHAR(150) NOT NULL,
	[Email] NVARCHAR(100) NOT NULL,
	[Password] NVARCHAR(256) NOT NULL,
	[Points] INT NOT NULL
)
