CREATE PROCEDURE [dbo].[spAddUser]
	@UserName NVARCHAR(150) NOT NULL,
	@Email NVARCHAR(100) NOT NULL,
	@Password NVARCHAR(256) NOT NULL,
	@Points INT NOT NULL
AS
begin
	INSERT INTO [dbo].[Users] VALUES (@UserName, @Email, @Password, @Points);
end
