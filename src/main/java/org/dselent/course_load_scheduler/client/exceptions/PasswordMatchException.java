package org.dselent.course_load_scheduler.client.exceptions;

/**
 * Custom exception for when a password/confirmPassword combo for a new account do not match
 * 
 * @author frcampanelli
 *
 */
public class PasswordMatchException extends Exception
{

	private static final long serialVersionUID = 4L;
	
	public PasswordMatchException()
	{
		
	}

}
