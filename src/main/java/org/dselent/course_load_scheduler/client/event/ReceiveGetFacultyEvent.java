package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetFacultyAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetFacultyEventHandler;

import com.google.gwt.event.shared.GwtEvent;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for processing an invalid login
 * 
 * @author dselent
 *
 */
public class ReceiveGetFacultyEvent extends GwtEvent<ReceiveGetFacultyEventHandler>
{
	public static Type<ReceiveGetFacultyEventHandler> TYPE = new Type<ReceiveGetFacultyEventHandler>();

	private ReceiveGetFacultyAction action;

	public ReceiveGetFacultyEvent(ReceiveGetFacultyAction rgfe)
	{
		this.action = rgfe;
	}

	public ReceiveGetFacultyAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	@Override
	public Type<ReceiveGetFacultyEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(ReceiveGetFacultyEventHandler handler)
	{
		handler.onReceiveGetFaculty(this);
	}
}
