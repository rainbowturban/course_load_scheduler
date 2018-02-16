package org.dselent.course_load_scheduler.client.exceptions;

/**
 * Custom exception for when a password for a new account is too short (less than 8 characters)
 * 
 * @author frcampanelli
 *
 */
public class PasswordLengthException extends Exception
{

	private static final long serialVersionUID = 2L;
	
	public PasswordLengthException()
	{
		
	}

}
