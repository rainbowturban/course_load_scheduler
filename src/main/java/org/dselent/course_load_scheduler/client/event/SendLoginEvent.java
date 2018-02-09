package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.SendLoginEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendLoginEvent extends GwtEvent<SendLoginEventHandler>
{
	public static Type<SendLoginEventHandler> TYPE = new Type<SendLoginEventHandler>();
	
	private SendLoginAction action;
	
	public SendLoginEvent(SendLoginAction action)
	{
		this.action = action;
	}
	
	public SendLoginAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendLoginEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendLoginEventHandler handler)
	{
		handler.onSendLogin(this);
	}
}
