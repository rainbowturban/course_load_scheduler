package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetFacultyEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetFacultyEvent extends GwtEvent<SendGetFacultyEventHandler> {
	public static Type<SendGetFacultyEventHandler> TYPE = new Type<SendGetFacultyEventHandler>();

	private SendGetFacultyAction action;

	public SendGetFacultyEvent(SendGetFacultyAction action)
	{
		this.action = action;
	}

	public SendGetFacultyAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	@Override
	public Type<SendGetFacultyEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetFacultyEventHandler handler)
	{
		handler.onSendGetFaculty(this);
	}

}
