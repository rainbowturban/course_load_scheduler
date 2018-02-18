package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SubmitRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.SubmitRemoveSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SubmitRemoveSectionEvent extends GwtEvent<SubmitRemoveSectionEventHandler>{
	public static Type<SubmitRemoveSectionEventHandler> TYPE = new Type<SubmitRemoveSectionEventHandler>();
	
	private SubmitRemoveSectionAction action;
	
	public SubmitRemoveSectionEvent(SubmitRemoveSectionAction action)
	{
		this.action = action;
	}
	
	public SubmitRemoveSectionAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SubmitRemoveSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SubmitRemoveSectionEventHandler handler)
	{
		handler.onSubmitRemoveSection(this);
	}
}
