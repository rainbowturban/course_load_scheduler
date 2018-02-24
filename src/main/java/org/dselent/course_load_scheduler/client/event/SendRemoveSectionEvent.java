package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.SendRemoveSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendRemoveSectionEvent extends GwtEvent<SendRemoveSectionEventHandler>{
	public static Type<SendRemoveSectionEventHandler> TYPE = new Type<SendRemoveSectionEventHandler>();
	
	private SendRemoveSectionAction action;
	
	public SendRemoveSectionEvent(SendRemoveSectionAction action)
	{
		this.action = action;
	}
	
	public SendRemoveSectionAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendRemoveSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendRemoveSectionEventHandler handler)
	{
		handler.onSubmitRemoveSection(this);
	}
}
