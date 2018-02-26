package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetUsersAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetUsersEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetUsersEvent extends GwtEvent<SendGetUsersEventHandler>{
	public static Type<SendGetUsersEventHandler> TYPE = new Type<SendGetUsersEventHandler>();
	
	private SendGetUsersAction action;
	
	public SendGetUsersEvent(SendGetUsersAction action)
	{
		this.action = action;
	}
	
	public SendGetUsersAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetUsersEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetUsersEventHandler handler)
	{
		handler.onSendGetUsers(this);
	}

}
