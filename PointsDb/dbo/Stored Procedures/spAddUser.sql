CREATE PROCEDURE [dbo].[spAddUser]
	@Id NVARCHAR(256),
	@UserName NVARCHAR(150),
	@Email NVARCHAR(100),
	@Password NVARCHAR(256),
	@Points INT,
	@UntilPoints DATETIME
AS
begin
	INSERT INTO [dbo].[Users] VALUES (@Id, @UserName, @Email, @Password, @Points, @UntilPoints);
end
